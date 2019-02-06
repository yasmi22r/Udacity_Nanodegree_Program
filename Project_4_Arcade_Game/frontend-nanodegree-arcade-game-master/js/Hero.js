class Hero {

  // Hero class
  // Constructor


  // Properties
  // x position
  // y position
  // Sprite image

  // Methods
  // Update position
  // Check collision here
  // Did player x and y  collide with enemy?
  // Check win here?
  // Did player x and y reach final tile?
  // Render
  // Draw player sprite on current x and y coord position
  // Handle keyboard input
  // Update player's x and y property according to input
  // Reset Hero
  // Set x and y to startin x and y

  constructor() {
    this.sprite = 'images/char-boy.png';
    this.step = 101;
    this.jump = 83;
    this.x = 0;
    this.y = 0;

  }

  // Draw hero sprite on current x and y coord position
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }


  /**
  * Update hero's x and y property according to handleInput
  * @param {string} input - Direction to travel
  *
  */
  handleInput(input) {
    switch(input) {
      case 'left':
      this.x -= this.step;
      break;
      case 'up':
      this.y -= this.jump;
      break;
      case 'right':
      this.x += this.step;
      break;
      case 'down':
      this.y += this.jump;
      break;
    }
  }







}
