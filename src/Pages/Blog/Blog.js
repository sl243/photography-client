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
            <div className='mt-10'>
                <h1 className='text-4xl text-center text-white font-semibold'>What is JWT? How does it works?</h1>
                <p className='text-xl mt-3'>
                    <strong>JWT:</strong> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
                <p className='text-xl mt-3'>
                    <strong> JWT Works:</strong> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
                <p className='text-xl mt-3'>
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
                <p className='text-xl mt-3'>
                    Once decoded, you will get two JSON strings: <br></br>
                    1. The header and the payload. <br></br>
                    2. The signature.
                </p>
                <p className='text-xl mt-3'>
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                </p>
                <p className='text-xl mt-3'>
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                </p>
                <p className='text-xl mt-3'>
                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                </p>
                <p className='text-xl mt-3'>
                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>
            <div>
                <h2 className='text-4xl mt-10 text-center text-white font-semibold'>what is difference between javascript and node js</h2>
                <div className='flex'>

                    <div>
                        <h1 className='text-2xl text-center text-white font-semibold mt-3'>javascript</h1>
                        <p className='text-xl mt-3'>
                            <strong>1-</strong> Javascript is a programming language that is used for writing scripts on the website.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>2-</strong> Javascript can only be run in the browsers.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>3-</strong> It is basically used on the client-side.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>4-</strong> Javascript is capable enough to add HTML and play with the DOM.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>5-</strong> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>6-</strong> Javascript is used in frontend development.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>7-</strong> Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>8-</strong> 	It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-center text-white font-semibold mt-3'>Node js</h1>
                        <p className='text-xl mt-3'>
                            <strong>1-</strong> NodeJS is a Javascript runtime environment.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>2-</strong> We can run Javascript outside the browser with the help of NodeJS.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>3-</strong> It is mostly used on the server-side.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>4-</strong> Nodejs does not have capability to add HTML tags.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>5-</strong> V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>6-</strong> Nodejs is used in server-side development.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>7-</strong> Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                        </p>
                        <p className='text-xl mt-3'>
                            <strong>8-</strong> Nodejs is written in C, C++ and Javascript.
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;