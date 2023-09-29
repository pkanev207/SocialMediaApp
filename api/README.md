# Social Media App Tutorial

A Full Stack Social Network App by Lama Dev on YouTube  

<https://www.youtube.com/watch?v=1EuNnZEp2sQ&ab_channel=LamaDev>

## Source Code

<https://github.com/safak/youtube2022/tree/social-app>

### Stack

 React, Node.js, MySQL, hooks, Context API, React-query, JWT, Cookies

#### Security of storing Bearer token in cookies  

Some disadvantages of storing tokens in cookies:  

The max size of a cookie is only 4kb so that may be problematic if you have many claims attached to the token.  

Cookies can be vulnerable to cross-site request forgery (CSRF or XSRF) attacks. Using a web app framework's CSRF protection makes cookies a secure option for storing a JWT. CSRF can also be partially prevented by checking the HTTP Referer and Origin header. You can also set the SameSite=strict cookie flag to prevent CSRF attacks.  

Can be difficult to implement if the application requires cross-domain access. Cookies have additional properties (Domain/Path) that can be modified to allow you to specify where the cookie is allowed to be sent.  

------- Update -----

You can also use cookies to store the auth token, even it is better (at least in my opinion than using local storage, or some session middleware like Redis). And there are some different ways to control the lifetime of a cookie if we put aside the httpOnly and the secure flags:  

Cookies can be destroyed after the browser is closed (session cookies).  
Implement a server-side check (typically done for you by the web framework in use), and you could implement expiration or sliding window expiration.  
Cookies can be persistent (not destroyed after the browser is closed) with an expiration.  
Your JS should not have access to the cookie. There are flags you can set on cookies that will help protect them and make sure they are only used for the correct purposes.

The ___HttpOnly___ flag is set on the cookie then JS will not be able to access it but it will still be sent with any request.  

The ___SameSite___ flag will ensure that the cookie is only sent back to the site that gave it to you. Which prevents leakage.  

The ___Secure___ flag will make it only send the cookie over a secured connection to prevent someone from sniffing it out of your web traffic.  

##### users  

 Tim 1234567  
 Jean Marc 7654321  
