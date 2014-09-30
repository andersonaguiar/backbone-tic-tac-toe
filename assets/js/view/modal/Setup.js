var TicTacToe = TicTacToe || {};

TicTacToe.SetupModal = TicTacToe.Modal.extend({
    el: '.overlay, .setup',

    events: {
        'click .cpu'   : 'cpu',
        'click .multi' : 'human'
    },

    configureListeners: function(game) {
        this.listenTo(game.players, 'selectPlayer', this.show);

        game.players.listenTo(this, 'playerConfiguration', game.players.applyConfiguration);
    },

    cpu: function() {
        this.trigger('playerConfiguration', true);
        this.hide();
    },

    human: function() {
        this.trigger('playerConfiguration', false);
        this.hide();
    }
});
