export default function Contact(){
    return `
    <form action="https://formspree.io/mike.gregory687@gmail.com" method="POST">
        ​
        <input type="text" name="firstname" placeholder="First Name" size="100" autofocus required>
        <input type="text" name="lastname" placeholder="Last Name" size="100" required>
        <input type="email" name="userEmail" placeholder="your.email@example.com" required>
        ​<input name="SuperSecurePassword" type="password" required>
               
        <textarea name="user_message" rows="8" cols="40"></textarea>
        <input type="submit">
    </form>
    `;
}