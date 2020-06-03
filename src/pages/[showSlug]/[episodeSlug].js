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

export async function getServerSideProps({ params, query }) {
    const { showSlug, episodeSlug } = params
    const { isRewriting = false } = query

    return {
        props: {
            showSlug,
            episodeSlug,
            isRewriting,
        }
    }
}

export default Episode
