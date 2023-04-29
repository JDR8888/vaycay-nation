## basic functionality
**sign up for an account** (signup/signin pages, JWT, user model). 
**search for national parks/rec areas**
- when logged in, can go to search page. search page allows two main methods of searching - can type in the name of a park in the search bar --> db query which sends request to nps api with {parkName} parameter, if only one result comes back, the user will be taken to the Park page which will display in-depth info + pictures of that park. the user will have options of adding the park to 'visited' or 'want to visit' and if they have visited, they can leave a review.
- other method is to search by state (api takes two-letter state codes.) what would be a nice feature (but may be  difficult to do) is to implement an SVG map of the US with selectable states that the user can click on to trigger a search by state (this would return all natl parks/rec areas in that state). the state search will return a list of parknames with limited data. the user can then click on any of the results, and this will take them to the Park page

**add friends** 
- the user can find other users, either by searching usernames or seeing usernames listed on park reviews. usernames will be selectable with an option to add-to-friends.
- 


## theme
- B/W toggleable from nav. everything will be black or white except accent color (something earthy since it's an NPS-based/outdoorsy site). toggling will flip all black and white but leave accent color the same. 

potential colors: alpine green #1B5448

## NPS API
- parks by name

- parks by state
```
    - description (string longer)
    - fullName (string)
    - id ( alphanumeric (string) )
    - lat (int)
    - lon (int)
    - weatherInfo (string/longer text)
    - [ images ] .url, .altText
    - operating hours[0] .description 
```


## pages
- Home
- Profile (if logged in)
- search page


## models
```
    User model
    (userSchema)
    - name
    - username
    - email
    - password
    - wishlist: [park: {
        - id
        - name
        - state
    }]
    - trips: {
        upcoming: []
        past: []
    }
```