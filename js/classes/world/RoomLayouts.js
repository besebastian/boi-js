define(function () {
    'use strict';

    /**
     *  Class to generate rooms for use in the Room class
     */
    function RoomLayouts() {
        this.layouts = [
            [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        ];
        return this;
    }

    /**
     *  Returns a random room layout
     */
    RoomLayouts.prototype.getRandomLayout = function () {
        return this.layouts[Math.floor(Math.random() * this.layouts.length)];
    };

    return RoomLayouts;
});
