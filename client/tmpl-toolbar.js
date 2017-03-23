Template.toolbar.events({
    // Start Add Snippet Events
    'click #btnAdd': function(e) {
        addSnippet();
    },
    'keypress #txtAdd': function(e) {
        if (e.keyCode != 13) return;
        addSnippet();
    },
    // End Add Snippet events / Start Serach Snipets
    'click #searchButton': function(e) {
        console.log("Click on #searchButton");
        search();
    },
    'keypress #searchText': function(e) {
        if (e.keyCode != 13) return;
        console.log("Entered on text search.");
        search();
    }
})

// Insert Snippet
function addSnippet() {
    var txtNode = $('#txtAdd');
    if (!txtNode || !txtNode.val()) return;
    Snippets.insert({
        owner: Meteor.userId(),
        text: txtNode.val()
    });
    txtNode.val('');
}
// Not working
function search() {
    var searchtxt = $('#searchBox').val();
    console.log("Searching for: " + searchtxt);
    // if (!searchtxt || !searchtxt == " ") return;
    console.log("Passed validation");
    var item = $('.snippetItem');
    for (var i = 0; i <= item.length; i++) {
        if ($(item[i]).text() == searchtxt ) {
            console.log("Found on item: " + i);
            item.addClass('found');
        }
    }
}
