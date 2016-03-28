import React from 'react';

export default class Body extends React.Component {

  render() {
    return (
        <body>
          <ul>
            <li><a class="add-to-cart" href="#" data-name="Apple" data-price="1.22">Apple $1.22</a></li>
            <li><a class="add-to-cart" href="#" data-name="Banana" data-price="22.33">Banana $1.33</a></li>
            <li><a class="add-to-cart" href="#" data-name="Shoe" data-price="5.22">Shoe $22.33</a></li>
          </ul>
          <button id="clear-cart">Clear Cart</button>
        </body>
    );
  }
}
