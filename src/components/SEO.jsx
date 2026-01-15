import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
    const siteTitle = 'DMA Media - Digital Marketing Amplified';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || 'Transform your brand with cutting-edge digital marketing strategies. DMA Media delivers data-driven campaigns, creative excellence, and measurable results.';

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={metaDescription} />

            {/* Open Graph tags */}
            <meta property='og:type' content={type || 'website'} />
            <meta property='og:title' content={fullTitle} />
            <meta property='og:description' content={metaDescription} />

            {/* Twitter Card tags */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={fullTitle} />
            <meta name='twitter:description' content={metaDescription} />
        </Helmet>
    );
};

export default SEO;
