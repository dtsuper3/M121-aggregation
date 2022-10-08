const q=[
  {
    '$match': {
      'tomatoes': {
        '$exists': true, 
        '$ne': null
      }, 
      'tomatoes.viewer.rating': {
        '$gte': 3
      }, 
      'cast': {
        '$in': [
          'Sandra Bullock', 'Tom Hanks', 'Julia Roberts', 'Kevin Spacey', 'George Clooney'
        ]
      }
    }
  }, {
    '$project': {
      'num_favs': {
        '$size': {
          '$setIntersection': [
            [
              'Sandra Bullock', 'Tom Hanks', 'Julia Roberts', 'Kevin Spacey', 'George Clooney'
            ], '$cast'
          ]
        }
      }, 
      'rating': '$tomatoes.viewer.rating', 
      'title': 1
    }
  }, {
    '$sort': {
      'num_favs': -1, 
      'rating': -1, 
      'title': -1
    }
  }, {
    '$skip': 25
  }
]
