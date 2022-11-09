import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20'>
            <div>
                <h1 className='text-4xl text-center text-white font-semibold'>Difference between SQL and NOSQL</h1>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> A software to retrieve, store and manage scalability of databases.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> SQL was developed in the year 1970 for flat file storage problems.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> NoSQL was developed in 2000 as an enhanced version for SQL databases for unstructured and semi-structured data.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> SQL databases support Structured Query Languages.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> NonSQL does not have any declarative query language.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> SQL supports predefined schemas, making the storage of data restrictive to structured type only.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> Nosql supports dynamic schemas to store different forms of data.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> SQL is best suitable for complex queries, multi-row transactions.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> Databases that support SQL require powerful hardware to support vertical scaling.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> NonSQL databases require commodity hardware for horizontal scaling.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> SQL does not support hierarchical storage of data.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> NoSQL is best suited for hierarchical storage of data.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>SQL:</strong> SQL databases can only be run on a single system and hence, does not follow distribution of data.
                </p>
                <p className='w-3/4 mx-auto text-xl mt-5'>
                    <strong>NoSQL:</strong> NoSQL databases are designed to follow data distribution features like repetition, partition.
                </p>
            </div>
        </div>
    );
};

export default Blog;