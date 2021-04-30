// Global App State

import React from 'react';
import globalHook from 'use-global-hook';
import { appStorageName } from '../globals/globals';

function getFavs(){

    let favsFromStorage = localStorage.getItem(appStorageName);
    
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
}

const actions = {
    addFav: (store, movieObj) => {

        const newFavs = [...store.state.favs, movieObj];
        const newFavsForStorage = JSON.stringify(newFavs);
        
        localStorage.setItem(appStorageName, newFavsForStorage);
        store.setState({ favs: newFavs });

        // console.log(`new Favs : ${newFavs}`);
    },
    
    removeFav: (store, id) => {

        // Make a copy to avoid modify state directly.
        let currentFavs = store.state.favs;

        const indexOfMovieToRemove = currentFavs.findIndex((movieObj) => movieObj.id === id);
        currentFavs.splice(indexOfMovieToRemove, 1);
    
        let favsForStorage = JSON.stringify(currentFavs);
        localStorage.setItem(appStorageName, favsForStorage);
        
        store.setState({ favs: currentFavs });
        
        // console.log(`current favs : ${currentFavs}`);
    }
}

const initialState = {
    favs: getFavs()
}

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;