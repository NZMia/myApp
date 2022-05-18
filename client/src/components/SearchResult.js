import React from 'react';

const SearchResult = ({ user, repos }) => {
  const hasUser = typeof user != 'string';

  return (
    <div className="searchResult">
      {hasUser ? (
        <div className="searchResult__content">
          <img className="searchResult__img" src={user.avatar_url} alt="" />
          <div className="searchResult__content--user">
            <p>Name: {user.name}</p>
            <p>Repositories count: {user.public_repos}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
          </div>
          {repos && (
            <div className="searchResult__content--repo">
              <p>Newest Repositories:</p>
              {repos.map((repo) => {
                return (
                  <a key={repo.id} href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="globalGutter">
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
