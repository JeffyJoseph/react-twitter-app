// library imports
import React, {useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from "axios";
// Component  imports
import SearchCategory from "../../SearchCategory";
import TweetItem from "../TweetItem/TweetItem";
// css imports
import './TweetList.css'

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    if (source == null)
        source = [];
    if (destination == null)
        destination = [];
    const sourceClone = [...source];
    const destClone = [...destination];
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    borderRadius: '5px',

    // change background colour if dragging
    background: isDragging ? '#e6d7c3' : 'white',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#e6d7c3' : '#e6d7c3',
    padding: grid,
    borderRadius: '5px',
});

const TweetList = () => {
    const [retrievedTweets, setRetrievedTweets] = useState([]);
    const [savedTweets, setsavedTweets] = useState([]);
    const [enteredFilter, setEnteredFilter] = useState('React');

    /**
     * fetch the search results for passed filter value
     */
    useEffect(() => {
        const query = enteredFilter.length === 0 ? 'React' : enteredFilter;
        axios.get(process.env.REACT_APP_BACKEND_API + `/twitter`, {
            params: {
                searchQuery: query,
                count: 5
            },
        }).then((response) => {
            const responseItems = response.data.statuses;
            const localSavedData = JSON.parse(localStorage.getItem('selected'))
            filterTweets(responseItems, localSavedData)
        });
    }, [enteredFilter]);

    /**
     * Update local storage whenever saved tweets are updated
     */
    useEffect(() => {
        if (savedTweets && savedTweets.length > 0)
            localStorage.setItem('selected', JSON.stringify(savedTweets))
    }
        , [savedTweets]);

    /**
     * Remove saved tweets from the retreived list to avoid duplication and update saved tweets on initial load
     */
    const filterTweets = (retrived, saved) => {
        const itemsClone = [...retrived];
        if (retrived && retrived.length > 0 && saved && saved.length > 0) {
            retrived.forEach(item => {
                saved.forEach(select => {
                    if (item.id === select.id) {
                        itemsClone.splice(item.index, 1);
                    }
                })
            });
        }
        setRetrievedTweets(itemsClone);
        const selected = JSON.parse(localStorage.getItem('selected'));
        setsavedTweets(selected);
    }
    /**
     *  on Search Click
     */
    const changeHandler = (event) => {
        setEnteredFilter(event.current.value);
    }


    /**
     * Obtain the set of tweets based on the passed id
     */
    const getList = (id) => {
        if (id === 'retrived') {
            return retrievedTweets;
        } else {
            return savedTweets;
        }
    };

    /**
     * Function triggered when a tweet is dragged and saved
     */
    const onDragEnd = result => {
        const { source, destination } = result;
        // dropped outside the list or same list
        if (!destination || destination.droppableId !== 'saved') {
            return;
        }
        destination.droppableId = 'saved';
        const result1 = move(
            getList(source.droppableId),
            getList(destination.droppableId),
            source,
            destination
        );
        setRetrievedTweets(result1.retrived);
        setsavedTweets(result1.saved);
    };

    return (
        <div>
            <SearchCategory className="search"
                onchange={changeHandler} />
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="container">
                    <Droppable className="tweet" droppableId="retrived">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {retrievedTweets.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={(item.id).toString()}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                <TweetItem 
                                                name={item.user.name}
                                                text={item.text}
                                                date={item.created_at}
                                                url={item.user.profile_background_image_url_https} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="saved">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}>
                                {savedTweets && savedTweets.map((item, index) => (
                                    <Draggable isDragDisabled
                                        key={item.id}
                                        draggableId={(item.id).toString()}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}>
                                                <TweetItem
                                                    name={item.user.name}
                                                    text={item.text}
                                                    date={item.created_at} 
                                                    url={item.user.profile_background_image_url_https} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext></div>
    );
}

export default TweetList;

