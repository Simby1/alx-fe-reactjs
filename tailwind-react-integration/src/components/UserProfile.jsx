function UserProfile() {
  return (
    // Container: Gray bg, padding, max-width, centered, rounded corners, and shadow
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      
      {/* Image: Circular, 150px (w-36 h-36), and centered */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto" 
      />
      
      {/* Heading: Large text, blue-800, and vertical margin */}
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      
      {/* Paragraph: Gray-600 and base font size */}
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;