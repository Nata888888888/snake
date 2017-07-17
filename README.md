# snake

Plan:

1. Create div with canvas inside with fixed size 600 x 600
2. Try to draw rectangle, line and circle. Circle in a middle, rectangle inside, and horizontal line in the middle of rectangle
4. Create class describing grid with it properties and methods:
    -- Grid properties
            canvas width and height
            number of rows and columns
            cell border color
            cell background color
            array of cells object 60x60 (class cell is object with properties color and isSet - boolean)
    -- Grid methods:
       Draw()
       SetCell(color, row, col)
       ResetCell(row, col)
5. Create class wall
    -- Wall properties
            grid
            color
    -- Wall methods
            Build
6. Create class snake
    -- Snake properties
            direction - up,down,left,right
            length
            body - array of cell coordinates (double array)
    -- Sname methods
            TryMove() return false if snake will bump into wall or itself otherwise return true
            Move() - move can be implemnted by moving cell from end of the array to beginning
7. Create class apple
    -- Apple properties
            grid
            coordinate
            kind - tasty, poison
    -- Apple properties
            dropApple()
8. Create class Game
    -- Game properties
            grid
            snake
            apples
            wall
            points
            speed - 500ms on first level
    -- Game methods
            public gameStart:
                - create grid
                - draw wall
                - create snake
                - drop few apples
                - draw grid
                - will start timer, on each timer tick we will call private method
            private gameTick - called on each timer tick:
                - tryMove, if false call gameEnd
                - else Move
                - drop one more Apple
                - re-Draw grid
            public gameEnd - show game over and points earned
            public gamePause
9. In html create button to start game, pause/continue game, stop game and to restart game
            
-----------------------------------
Each class need to be in separate js file
            
    