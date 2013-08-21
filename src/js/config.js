requirejs.config({
    deps: ['main'],
    paths: {
        // Core functionality
        'Game':             'classes/core/Game',
        'Input':            'classes/core/Input',
        'Renderer':         'classes/core/Renderer',
        'Loader':           'classes/core/Loader',

        // Creature classes
        'Creature':         'classes/creatures/Creature',
        'Player':           'classes/creatures/Player',
        'CreatureFactory':  'classes/creatures/CreatureFactory',

        // Entities
        'Projectile':       'classes/entities/Projectile',

        // Screens
        'Screen':           'classes/screens/Screen',
        'ScreenMain':       'classes/screens/ScreenMain',
        'MainMenu':         'classes/screens/MainMenu',

        // Map guff
        'WorldFactory':     'classes/world/WorldFactory',
        'World':            'classes/world/World',
        'Floor':            'classes/world/Floor',
        'Room':             'classes/world/Room',
        'RoomLayouts':      'classes/world/RoomLayouts',

        // Utilities
        'DebugTools':       'classes/utils/DebugTools'
    }
});
