(function() {var implementors = {};
implementors['log'] = [];implementors['openssl'] = [];implementors['hyper'] = [];implementors['websocket'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
