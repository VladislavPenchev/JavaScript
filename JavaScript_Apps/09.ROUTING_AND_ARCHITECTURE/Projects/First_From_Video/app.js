const app = Sammy(function() {
    this.get('/', () => {
        this.swap('<h1>Hello from the about page</h1>');
    });

    this.get('#/about', () => {
        this.swap('<h1>Hello from the about page</h1>');
    });
});

$(() => app.run());