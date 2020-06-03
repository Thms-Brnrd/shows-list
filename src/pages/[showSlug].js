import React from 'react';

const Show = ({ showSlug }) => {
    return (
        <h1>Show {showSlug}</h1>
    )
}

export async function getServerSideProps({ params }) {
    const { showSlug } = params

    return {
        props: {
            showSlug
        }
    }
}

export default Show
