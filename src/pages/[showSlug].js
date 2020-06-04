import React from 'react';
import Link from "next/link";

const Show = ({ showSlug, isRewriting }) => {
    return (
        <>
            <h1>Show {showSlug}</h1>
            <ul>
                <li>
                    {/* Error href and as mismatch */}
                    <Link href="/[showSlug]/[episodeSlug]" as={isRewriting ? '/episode1' : `/${showSlug}/episode1`}>
                        <a>Episode 1</a>
                    </Link>
                </li>
                <li>
                    {/* Based on https://github.com/vercel/next.js/pull/9837/files */}
                    {/* Episode page is used but "episode2" is used as the showSlug, not the episodeSlug */}
                    <Link href={`/[showSlug]/[episodeSlug]?showSlug=${showSlug}&episodeSlug=episode2`} as={isRewriting ? '/episode2' : `/${showSlug}/episode2`}>
                        <a>Episode 2</a>
                    </Link>
                </li>
            </ul>
            {isRewriting && <p>This request is rewrited from another domain</p>}
        </>
    )
}

Show.getInitialProps = async ({ query }) => {
    console.log('SHOW', 'getInitialProps');
    const { showSlug, isRewriting = false } = query

    return {
        showSlug,
        isRewriting,
    }
}

export default Show
