import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12">
              <table className="table " id="dataTables-userlist">
                <thead>
                  <tr>
                    <th>User </th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Project</th>
                    <th>status</th>
                    {/* <th>socials</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic1.png" alt="" className="gridpic" />John Doe</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">40</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="even ">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic2.png" alt="" className="gridpic" />Alone Guy</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">18</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="odd">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic3.png" alt="" className="gridpic" />Astha Smith</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">10</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="even ">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic4.png" alt="" className="gridpic" />Lucky Sans</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">19</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="odd">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic1.png" alt="" className="gridpic" />John Doe</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">40</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="even ">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic2.png" alt="" className="gridpic" />Alone Guy</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">18</td>
                    <td className="center"><span className="status inactive">Inactive</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="odd">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic3.png" alt="" className="gridpic" />Astha Smith</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">17</td>
                    <td className="center"><span className="status inactive">Inactive</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="even ">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic1.png" alt="" className="gridpic" />John Doe</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">50</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="odd">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic2.png" alt="" className="gridpic" />Alone Guy</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">20</td>
                    <td className="center"><span className="status inactive">Inactive</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="even ">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic3.png" alt="" className="gridpic" />Astha Smith</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">15</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="odd">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic4.png" alt="" className="gridpic" />Lucky Sans</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">15</td>
                    <td className="center"><span className="status inactive">Inactive</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                  <tr className="even ">
                    <td><img src="https://maxartkiller.com/website/admin9/admin9/img/pic1.png" alt="" className="gridpic" />John Doe</td>
                    <td>info@maxartkiller.in</td>
                    <td>+91 000 000 0000</td>
                    <td className="center">50</td>
                    <td className="center"><span className="status active">Active</span></td>
                    {/* <td class="center"><a href="#" class="btn btn-circle btn-primary "><i class="fa fa-facebook"></i></a> <a href="#" class="btn btn-circle btn-danger "><i class="fa fa-google-plus"></i></a> <a href="#" class="btn btn-circle btn-info "><i class="fa fa-twitter"></i></a> <a href="#" class="btn btn-circle btn-warning "><i class="fa fa-envelope"></i></a></td> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    );
  }
}

export default Table;