import Script from 'next/script';

const JsonldScript = ({ jsonld }: any) => {
    return (
        <Script
            id={jsonld['@type']}
            suppressHydrationWarning
            type='application/ld+json'
            // nonce='NmYxNTcyMDYtMTE1Ni00MjA1LTllM2ItMGU4MjUzYmEyMDhk'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
        />
    );
};

export default JsonldScript;
