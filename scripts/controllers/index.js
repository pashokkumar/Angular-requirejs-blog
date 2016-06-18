/** attach controllers to this module 
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 * below, you can see we bring in our services and constants modules 
 * which avails each controller of, for example, the `config` constants object.
 **/
define([
    './main-ctrl',
    './detail-ctrl',
    './contact-us-ctrl',
    './about-us-ctrl',
    './privacy-policy-ctrl',
    './copyright-policy-ctrl',
    './archives-ctrl',
    './add-post-ctrl'
], function () {});
