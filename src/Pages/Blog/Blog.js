import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl text-center text-white font-semibold'>Difference between SQL and NOSQL</h1>
            <div className='flex'>
                <div>
                    <h1 className='text-2xl text-center text-white font-semibold mt-3'>SQL</h1>
                    <p className='text-xl mt-3'>
                        <strong>1-</strong> SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>2-</strong> A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>3-</strong> SQL was developed in the year 1970 for flat file storage problems.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>4-</strong> SQL databases support Structured Query Languages.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>5-</strong> SQL supports predefined schemas, making the storage of data restrictive to structured type only.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>6-</strong> SQL is best suitable for complex queries, multi-row transactions.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>7-</strong> Databases that support SQL require powerful hardware to support vertical scaling.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>8-</strong> SQL does not support hierarchical storage of data.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>9-</strong> SQL databases can only be run on a single system and hence, does not follow distribution of data.
                    </p>
                </div>
                <div>
                    <h1 className='text-2xl text-center text-white font-semibold mt-3'>NoSQL</h1>
                    <p className='text-xl mt-3'>
                        <strong>1-</strong> NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>2-</strong> A software to retrieve, store and manage scalability of databases.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>3-</strong> NoSQL was developed in 2000 as an enhanced version for SQL databases for unstructured and semi-structured data.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>4-</strong> NonSQL does not have any declarative query language.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>5-</strong> Nosql supports dynamic schemas to store different forms of data.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>6-</strong> NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>7-</strong> NonSQL databases require commodity hardware for horizontal scaling.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>8-</strong> NoSQL is best suited for hierarchical storage of data.
                    </p>
                    <p className='text-xl mt-3'>
                        <strong>9-</strong> NoSQL databases are designed to follow data distribution features like repetition, partition.
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Blog;