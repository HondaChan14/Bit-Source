import React from 'react'

const IssueBoard = ({issueCards}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {cards.map(card => (
      <Card key={card.title} title={card.title} image={card.image} />
    ))}
  </div>
  )
}

export default IssueBoard