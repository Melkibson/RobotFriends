import React from 'react'

const Card = ({className, alt, name, email, id}) => {
    return (
      <>
        <div className={className}>
          <img alt={alt} src={`https://robohash.org/${id}?set=set3`} />
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
      </>
    );
}

export default Card