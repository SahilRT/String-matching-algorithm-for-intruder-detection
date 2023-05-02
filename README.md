# String-matching-algorithm-for-intruder-detection
Intruder detection using string matching algorithm ( rabin-karp algorithm)

Algorithm Used : Rabin-Karp String Matching Algorithm
Language - javascript
Tool used - GitBash


#OUTPUT

![image](https://user-images.githubusercontent.com/115685767/235779307-06450c58-2805-4978-9db8-b996a31d3172.png)
Code to check for username to be accessed in authenticated users list and return position where it occurs


![image](https://user-images.githubusercontent.com/115685767/235779390-4c155808-2dc8-4a03-9831-dc99cf15a735.png)
Code where authenticated users list is present and username to be accessed is entered


![image](https://user-images.githubusercontent.com/115685767/235779438-ea492b50-cdad-4f5f-9ee7-318616af975b.png)
trying to access user adsa (not present in authenticated user list)


![image](https://user-images.githubusercontent.com/115685767/235779565-151cedf7-a97c-4173-ad2e-cd4bbdb71428.png)
Here position is [ ] hence , user is not available and INTRUSION DETECTED


![image](https://user-images.githubusercontent.com/115685767/235779672-34ddb9a6-b12e-45ab-81ce-01b689dc1266.png)
trying to access user "sahil" who is present in authenticated users


![image](https://user-images.githubusercontent.com/115685767/235779712-61158be9-4a94-4854-8b03-77ab3b733c0c.png)
Here, since user is available, its  position is returned and its not an INTRUSION
