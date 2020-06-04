import React from 'react';

const Episode = ({ showSlug, episodeSlug, isRewriting }) => {
    return (
        <>
            <h1>Episode {episodeSlug}</h1>
            <h2>from show {showSlug}</h2>
            {isRewriting && <p>This request is rewrited from another domain</p>}
        </>
    )
}

Episode.getInitialProps = async ({ query }) => {
    console.log('EPISODE', 'getInitialProps');
    const { showSlug, episodeSlug, isRewriting = false } = query

    return {
        showSlug,
        episodeSlug,
        isRewriting,
    }
}

export default Episode
