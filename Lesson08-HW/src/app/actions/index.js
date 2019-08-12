
const commentsLoaded = (newComments) => {
    return {
        type: 'COMMENTS_LOADED',
        payload: newComments
    };
};

export {
    commentsLoaded
};