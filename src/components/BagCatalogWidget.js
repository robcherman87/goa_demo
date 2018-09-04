import React, { Component } from 'react';
import '../App.css';


class BagCatalogWidget extends Component {
  render() {
    return (
        <span>
            <span><i class="fas fa-golf-club text-gray"></i>&nbsp;&nbsp;&nbsp;&nbsp;Bag Catalog</span> <button className="btn btn-primary float-right"><i className="fa fa-plus-circle"></i>&nbsp;&nbsp;Add Club</button><br /><br />
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Shaft</th>
                    <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-thin" scope="row">Callaway</td>
                        <td className="text-thin">Rogue 10 Irons</td>
                        <td className="text-thin">Steel</td>
                        <td className="text-thin">Iron</td>
                    </tr>
                    <tr>
                        <td className="text-thin" scope="row">TaylorMade</td>
                        <td className="text-thin">M1 460 Driver</td>
                        <td className="text-thin">Steel</td>
                        <td className="text-thin">Driver</td>
                    </tr>
                    <tr>
                        <td className="text-thin" scope="row">Titleist</td>
                        <td className="text-thin">Scotty Cameron Select Newport 2 Putter</td>
                        <td className="text-thin">Steel</td>
                        <td className="text-thin">Putter</td>
                    </tr>
                </tbody>
            </table>
        </span>
    );
  }
}

export default BagCatalogWidget;
