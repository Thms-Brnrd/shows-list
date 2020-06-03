import React from 'react';

const Episode = ({ showSlug, episodeSlug }) => {
    return (
        <>
            <h1>Episode {episodeSlug}</h1>
            <h2>from show {showSlug}</h2>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const { showSlug, episodeSlug } = params

    return {
        props: {
            showSlug,
            episodeSlug
        }
    }
}

export default Episode
