Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Labs Home");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Getting Started");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Labs Directory");
  }

  data.buffer.push("<div id=\"main\" class=\"container\">\n    <div class=\"navbar navbar-fixed-top\">\n        <div class=\"navbar-inner\">\n            <div class=\"container-fluid\">\n                <div class=\"brand\">\n                    Your App\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\" id=\"main\">\n        <div class=\"row-fluid\">\n            <div>\n                <div class=\"span3\">\n                  <div id=\"top-nav\" class=\"well sidebar-nav\">\n                    <ul id=\"navbar\">\n                      <li>\n                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "linkTo", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                      </li>\n                      <li>\n                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "getstarted", options) : helperMissing.call(depth0, "linkTo", "getstarted", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "startNav", options) : helperMissing.call(depth0, "outlet", "startNav", options))));
  data.buffer.push("\n                      </li>\n                      <li>\n                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "extensions", options) : helperMissing.call(depth0, "linkTo", "extensions", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "sideFilter", options) : helperMissing.call(depth0, "outlet", "sideFilter", options))));
  data.buffer.push("\n                      </li>\n\n                    </ul>\n                  </div>\n                </div>\n                <div class=\"span9 content\">\n                    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<footer>\n</footer>\n");
  return buffer;
  
});

Ember.TEMPLATES["classicapps"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Browse Our Directory.");
  }

  data.buffer.push("<h1>Classic Widgets</h1>\n<span class=\"type\">Overview</span>\n<br>\n<p>\n	These are the old type of Zendesk apps; they are not used in the New Zendesk (Lotus). We call them widgets to distinguish them. They are still used in the end-user facing interface, which is going to remain on the Classic Zendesk framework until the release of Help Center.\n</p>\n<p>\n	Whenever you would like to customize the user-facing web portal, you use a Classic Widget. They allow a great deal of customizability and are very easy to copy and paste from one place to another. In the agent interface, you create them by clicking on Settings >> Extensions >> Add Widget.\n</p>\n<span class=\"type\">Step-by-Step</span>\n<br>\n<h2>1.</h2>\n<h4>Assess the needs of your Zendesk account</h4>\n<p>\n	If you are aiming to make a change to the appearance or the functionality of the end-user interface, then widgets are the way to go. If your problem is a styling problem, you will want to inject <a href=\"http://reference.sitepoint.com/css/css\">CSS</a> with a CSS widget. If you want to change the functionality of the page or add or change elements (text, logos, links, etc.), then you will use a JavaScript widget.\n</p>\n<h2>2.</h2>\n<h4>Select an app that suits your needs. These are some common examples:</h4>\n<div class=\"dl_button dl_wide\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "extensions", options) : helperMissing.call(depth0, "linkTo", "extensions", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n<br>\n<h2>3.</h2>\n<h4>Copy the code from the widget and paste it into the account.</h4>\n<img src=\"/images/extensions.png\">\n<p>\n	Go to Settings >> Extensions in the agent interface and click on \"Add Widget\" on the right of the widget list. Choose a type of widget - all of the examples here are JavaScript widgets, so for them you will choose \"Global JavaScript.\" Other common cases include \"Global CSS\" widgets for styling, and \"Custom Widgets\" for displaying text, images, buttons or links on the end user interface.\n</p>\n<p>\n	A text area will open up, where you can paste in the code for your widget. Then, select the appropriate visibility from the drop-down (\"anyone can see\", \"agents only\" etc.) and then select \"Create Widget\" at the bottom and hit Save. That's really it! Now you may immediately see your changes live on the site.\n</p>\n");
  return buffer;
  
});

Ember.TEMPLATES["disclaimer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modal\">\n	<div class=\"modal-header\">\n		<button ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dismissModal", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" type=\"button\" class=\"close\">x</button>\n		<h3>Download Zenlabs Extension</h3>\n	</div>\n	<div class=\"modal-body\">\n		<h3>SUPPLEMENTAL TERMS AND CONDITIONS</h3>\n		<p>Capitalized terms used herein and not otherwise defined have the meaning set forth in the Zendesk Terms of Service (www.zendesk.com/company/terms) (the \"Terms\").</p>\n		<p>\n		In connection with Your subscription to the Service, Zendesk makes available to You certain test Software through its Zenlabs portal (all such Software available through such portal, \"Zenlabs Software\") which may enable You to modify the manner in which You configure the Service or enable customized features. By accessing, utilizing or enabling any Zenlabs Software, you are agreeing that the following terms and conditions (\"Zenlabs Supplemental Terms\") supplement your existing agreement with Zendesk with respect to your access to and use of the Service (your \"Service Agreement\") and are hereby made a part of the Service Agreement, as if all the provisions of these Zenlabs Supplemental Terms were repeated in the Service Agreement. Except where appropriate, the term Service and Software as used in the Terms shall include the Zenlabs Software.\n		<p/>\n		<p>\n		1. General Conditions; Access to and Use of Zenlabs Software. During the Subscription Term, You are hereby granted right to use the Zenlabs Software in connection with Your Account (without any right to sublicense) for Your internal business purposes, subject to all terms and conditions set forth in the Service Agreement. Any continuation of the grant of the right to use any of the Zenlabs Software after the termination of these Zendesk Supplemental Terms and/or after Zendesk decides to release Zenlabs Software to its customers generally will be on terms and conditions determined by Zendesk.\n		<p/>\n		<p>\n		2. Disclaimer of Warranties; No Support Obligation. Notwithstanding anything to the contrary set forth in Your Service Agreement, You agree that the Zenlabs Software is provided \"AS IS\" and on an \"AS AVAILABLE\" basis, and that Zendesk makes no warranty as to the Zenlabs Software. You further acknowledge and agree that: (i) the Zenlabs Software is not an component of the Service that has been designed for commercial released for by Zendesk; (ii) the Zenlabs Software may not be in final form and may contain errors, design flaws or other problems; (iii) the Zenlabs Software is not expected to function fully or adequately upon installation, and it is expected and anticipated that further testing, modification and development may be necessary to make the Zenlabs Software functional; (iv) it may not be possible to make the Zenlabs Software functional; (v) use of the Zenlabs Software may result in unexpected results, loss of data, project delays or other unpredictable damage or loss to You; and (vi) Zendesk is under no obligation to release and/or offer for sale commercial versions of the Zenlabs Software, and Zendesk has the right to unilaterally abandon development or availability of the Zenlabs Software at any time and without any obligation or liability to You. ZENDESK DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, IN RELATION TO THE ZENLABS SOFTWARE, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR ANY OR A PARTICULAR PURPOSE, NONINFRINGEMENT, OR THOSE ARISING FROM A COURSE OF DEALING OR USAGE IN TRADE RELATED TO THE ZENLABS SOFTWARE, ITS USE OR ANY INABILITY TO USE IT OR THE RESULTS OF ITS USE. You further agree that Zendesk shall have no obligation to correct any bugs, defects or errors in the Zenlabs Software or otherwise to support or maintain the Zenlabs Software.\n		<p/>\n		<p>\n		3. Termination or Suspension of Zenlabs Software. Zendesk reserves the right, in its sole discretion to terminate or suspend the availability of any and all Zenlabs Software.\n		<p/>\n		<p>\n		4. Intellectual Property Rights. Except for the limited rights granted to You herein, Zendesk retains all right, title and interest to the Zenlabs Software, including all associated Intellectual Property Rights as set forth in Your Service Agreement.\n		<p/>\n		<p>\n		5. Acknowledgement of Risk; Release. You acknowledge and agree that the Zenlabs Software represents test version of software that may contain bugs, defects and errors and that the Zendesk Software is not expected to function fully upon installation and/or integration, and You hereby agree, in addition to any obligations You may have in the Service Agreement, to release Zendesk from any claim with regard to the Zenlabs Software, its operation, availability or its failure to operate or be available. Without limiting the generality of the foregoing, You acknowledge and agree that neither the use, availability nor operation of any Zenlabs Software shall be subject to any service level commitment otherwise set forth in Your Service Agreement. This acknowledgement and release shall survive any termination of your Service Agreement.</p>\n	</div>\n	<div class=\"modal-footer\">\n		<button ");
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "dismissModal", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"btn close\">Cancel download</button>\n		<a ");
  hashContexts = {'href': depth0};
  hashTypes = {'href': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'href': ("zip_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"agree btn btn-inverse\">Agree and download this app</a>\n	</div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["extension"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <tr>\n    <td>\n      <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":</strong>\n    </td>\n    <td>\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n  </tr>\n  ");
  return buffer;
  }

  data.buffer.push("<h1>Extension</h1>\n\n<table>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.attributes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>\n\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["extension_edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <tr>\n    <td>\n      <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":</strong>\n    </td>\n    <td>\n      ");
  hashContexts = {'contentBinding': depth0};
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Labapp.BoundTextFieldView", {hash:{
    'contentBinding': ("this")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n  </tr>\n  ");
  return buffer;
  }

  data.buffer.push("<h1>Extension</h1>\n\n<table>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.attributes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>\n\n<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Update</button>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["extensions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "extension", "", options) : helperMissing.call(depth0, "linkTo", "extension", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<h1>Extensions</h1>\n\n<ul>\n ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["extensions_edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <tr>\n    <td>\n      <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":</strong>\n    </td>\n    <td>\n      ");
  hashContexts = {'contentBinding': depth0};
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Labapp.BoundTextFieldView", {hash:{
    'contentBinding': ("this")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n  </tr>\n  ");
  return buffer;
  }

  data.buffer.push("<h1>Extensions</h1>\n\n<table>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.attributes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>\n\n<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Update</button>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["getstarted"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!-- MAIN CONTENT -->\n<div id=\"main_content_wrap\" class=\"outer\">\n  <section id=\"main_content\" class=\"inner\">\n\n    <div class=\"whitebox shadow explanation\">\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || depth0.outlet),stack1 ? stack1.call(depth0, "maintab", options) : helperMissing.call(depth0, "outlet", "maintab", options))));
  data.buffer.push("\n    </div>\n\n  </section>\n</div>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["gridview"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n		<li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("category :item :whitebox :shadow")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "extension", "", options) : helperMissing.call(depth0, "linkTo", "extension", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</li>  		\n  	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n				<img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'src': ("icon_url")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("/>\n				<span class=\"appname\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n			");
  return buffer;
  }

  data.buffer.push("<section id=\"main_content\" class=\"inner\">\n  <ul id=\"widgetgrid\">\n  	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Browse the labs.");
  }

  data.buffer.push("<img class=\"headerpic shadow\" src = \"https://s3-us-west-1.amazonaws.com/zenlab/buddy1.png\"}/>\n<section id=\"main_content\" class=\"inner\">\n  <div id=\"intro\">\n    <h1>Zenlabs. Extend your Zendesk.</h1>\n    <p>\n      There are a number of hand-crafted apps that have already been created to serve our customers.\n      This documentation is intended to reveal some of the options available for those who wish to customize their Zendesk account, and the plug-ins described herein are to be understood to be of an 'experimental' nature. They are unofficial and to be used at your own risk.\n    </p>\n  </div>\n\n  <div id=\"browse-button\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "extensions", options) : helperMissing.call(depth0, "linkTo", "extensions", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</div>\n\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"well\">\n    Welcome to Yeoman and Ember.js!\n</div>\n");
  
});

Ember.TEMPLATES["lab"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <tr>\n    <td>\n      <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":</strong>\n    </td>\n    <td>\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n  </tr>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Change");
  }

  data.buffer.push("<h1>Lab</h1>\n\n<table>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.attributes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "user.edit", "model", options) : helperMissing.call(depth0, "linkTo", "user.edit", "model", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["lab_edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <tr>\n    <td>\n      <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":</strong>\n    </td>\n    <td>\n      ");
  hashContexts = {'contentBinding': depth0};
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Labapp.BoundTextFieldView", {hash:{
    'contentBinding': ("this")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n  </tr>\n  ");
  return buffer;
  }

  data.buffer.push("<h1>Lab</h1>\n\n<table>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.attributes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>\n\n<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Update</button>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["labs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "lab", "", options) : helperMissing.call(depth0, "linkTo", "lab", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "id", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<h1>Labs</h1>\n\n<ul>\n ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["privateapps"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Browse Our Directory.");
  }

  data.buffer.push("<!-- START PRIVATE LOTUS SECTION -->\n\n<h1>Private Apps for New Zendesk</h1>\n<span class=\"type\">Overview</span><br/>\n<p>Private Apps for New Zendesk are apps that have been developed by our Client Services engineers, which have been tested and made available internally but have not gone through the app approval process that would put them into the Zendesk App Store. These are the \"lab\" offerings, unofficial and to be used at one's own risk.</p>\n<span class=\"type\">Step-by-Step</span><br/>\n<h2>1.</h2>\n<h4>See if an app already exists for what you're trying to do.</h4>\n<p>Here is a collection of apps that are a part of our Zendesk Labs collection:</p>\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo || depth0.linkTo),stack1 ? stack1.call(depth0, "extensions", options) : helperMissing.call(depth0, "linkTo", "extensions", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n<p>If you do not see an app that suits your needs and are interested in developing your own, <a href=\"http://developer.zendesk.com/documentation/apps/introduction.html\" target=\"_blank\">Go here for more information</a> on how to do so.</p> \n<h2>2.</h2>\n<h4>Download and customize the app.</h4>\n<p>Click on the \"download\" button on the lab page to download it as a compressed (zip) file. If the app does not require configuration, you can upload it as-is. Otherwise, when it downloads, open it to \"expand\" the file, open the expanded folder in a code or text editor to make your changes, then save it again. You would then right click on the app folder that you just changed, and select \"Compress\" from the menu. This creates another zip, or compressed, file.<p>\n<h2>3.</h2>\n<h4>Upload it into your Zendesk Account</h4>\n<p>Now go into Zendesk, click on Settings >> Apps >> Create, and click on \"Create a new app.\" Give it a name and description, and then upload the zip file that you just created and hit \"Save.\"</p>\n");
  return buffer;
  
});

Ember.TEMPLATES["publicapps"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!-- START PUBLIC LOTUS SECTION -->\n<h1>Public Apps for New Zendesk</h1>\n<span class=\"type\">Overview</span><br/>\n<p>These are apps that can already be found in the Zendesk App Store. That means, in the agent interface, you can find them by going to Settings >> Apps >>Browse, and they offer a great deal of functionality with which to extend your Zendesk.</p>\n<span class=\"type\">Step-by-Step</span><br/>\n<h2>1.</h2>\n<h4>Find the app that suits your needs.</h4>\n<img src=\"images/browseapps.png\"/>\n<p>In the agent interface, navigate to Settings >> Apps >> Browse and you will see a list of all of the available apps that have been approved for the App Store. A lot of these are integrations, which means tools for pulling in or sending out information from other services that you might be using to complement your Zendesk.</p><p> Others are convenient extensions of Zendesk's functionality - this is where you'll find apps that display extra information in the sidebar next to a view of a ticket, such as user info, links, and other useful information. Hovering over each icon reveals a short description of what each one does.</p>\n<h2>2.</h2>\n<h4>Install and configure your app.</h4>\n<p>This is an especially simple process for public apps - all the hard work is already done for you! On hovering over the app you want, click on 'Install' and a settings page will usually pop up. Here you can enter in whatever details make the app right for you, and then click on \"Install.\" That's it, you're done!</p>");
  
});

Ember.TEMPLATES["startside"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<ul id=\"directionsType\">\n  <li><a data-tab=\"privateapps\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTab", "privateapps", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"active\">New Zendesk Private</a></li>\n  <li><a data-tab=\"publicapps\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTab", "publicapps", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">New Zendesk Public</a></li>\n  <li><a data-tab=\"classicapps\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectTab", "classicapps", {hash:{},contexts:[depth0,depth0],types:["ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Classic & Portal</a></li>\n</ul>");
  return buffer;
  
});