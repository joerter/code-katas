Feature: Conway's Game of Life
    Scenarios for Conway's Game of Life

    Scenario: A dead cell with 0 neighbors stays dead
        Given I have supplied the following "generation"
            """
            ---
            ---
            ---
            """
        When I tell the world to evolve once
        Then the next "generation" should be
            """
            ---
            ---
            ---
            """

    Scenario: A live cell with less than 2 neighbors dies
        Given I have supplied the following "generation"
            """
            ---
            -*-
            ---
            """
        When I tell the world to evolve once
        Then the next "generation" should be
            """
            ---
            ---
            ---
            """

    Scenario: A live cell with 2 neighbors lives on to the next generation
        Given I have supplied the following "generation"
            """
            --*
            -**
            ---
            """
        When I tell the world to evolve once
        Then the next "generation" should be
            """
            -**
            -**
            ---
            """

    Scenario: A live cell with 3 neighbors lives on to the next generation
        Given I have supplied the following "generation"
            """
            -**
            -**
            ---
            """
        When I tell the world to evolve once
        Then the next "generation" should be
            """
            -**
            -**
            ---
            """
