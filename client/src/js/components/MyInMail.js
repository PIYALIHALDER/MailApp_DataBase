var React = require('react');
var MyInMail = React.createClass({
  getInitialState: function(){
     return{MailFrom:this.props.allMails.MailFrom}
  },
    render: function() {
    return (
      <div className="mail">
      <div className="col-md-12 container">
       <div className ="col-sm-3">
        <a id="modal-47626" href="#modal-container-47626" role="button" className="btn" data-toggle="modal">  {this.props.allMails.MailFrom}</a>

    <div className="modal fade" id="modal-container-47626" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">

            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              
            </button>
            <h4 className="modal-title" id="myModalLabel">

            </h4>
          </div>
          <div className="modal-body">
             {this.props.allMails.MailBody}
          </div>
          <div className="modal-footer">


            <button type="button" className="btn btn-default" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>

      </div>

    </div>

      </div>
       <div className ="col-sm-2">
              {this.props.allMails.MailDate}
      </div>
         <div className ="col-sm-1">
                {this.props.allMails.MailTime}
      </div>
       <div className ="col-sm-2">
            {this.props.allMails.MailSubject}
      </div>
       <div className ="col-sm-4">
                 {this.props.allMails.MailBody}
        </div>

       </div>
      </div>
    );
  }
});
module.exports = MyInMail;
