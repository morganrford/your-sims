![Color Palette](./assets/45450.png)
1.  	#4276b7
2.      #3caad6
3.      #3cb9e1
4.      #21b96b
5.      #a6e329

have a field to your schema for an image that is a string, and then have the photo be a link that is deployed somewhere online

You would put the link in an img tag to display it

Action 	Route 	HTTP Verb
Index 	‘/users/:userId/foods’ 	GET
New 	‘/users/:userId/foods/new’ 	GET
Create 	‘/users/:userId/foods’ 	POST
Show 	‘/users/:userId/foods/:itemId’ 	GET
Edit 	‘/users/:userId/foods/:itemId/edit’ 	GET
Update 	‘/users/:userId/foods/:itemId’ 	PUT
Delete 	‘/users/:userId/foods/:itemId’ 	DELETE