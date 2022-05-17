import React from 'react';

const SearchResult = ({ user }) => {
  return (
    <div className="searchResult">
      {typeof user != 'string' ? (
        <div>
          <img src={user.avatar_url} alt="" />
          <p>name: {user.name}</p>
          <p>Repositories count: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      ) : (
        <div>
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
