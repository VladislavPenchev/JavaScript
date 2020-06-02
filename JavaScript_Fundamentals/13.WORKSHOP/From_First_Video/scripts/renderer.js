(function (scope) {
    const { SIZES } = scope;

    class Renderer {
        constructor(canvas, bounds) {
            this.ctx = canvas.getContext('2d');
            this.bounds = bounds;
            const image = new Image();
            image.src = 'https://www.freepnglogos.com/uploads/batman-logo-png-images-0.png';
            image.onload = () => {
                this.playerImage = image;
            };

        }

        clear() {
            const { ctx } = this;
            const { width, height } = this.bounds;
            ctx.clearRect(0, 0, width, height);
        }

        renderPlayer(left, top) {
            const { ctx } = this;
            const { WIDTH, HEIGHT } = SIZES.PLAYER;
            if(this.playerImage){
                ctx.drawImage(this.playerImage, left, top, WIDTH, HEIGHT);
            }
        }

        renderBullet(left, top) {
            const { ctx } = this;
            ctx.fillRect(left, top, 15, 15);
        }

        renderEnemy(left, top) {
            const { ctx } = this;
            ctx.fillRect(left, top, 15, 15);
        }
    }

    scope.Renderer = Renderer;

}(window));