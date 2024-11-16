const Slug = (originalString) => {
    const slugged = originalString
      .toLowerCase() 
      .replace(/[^a-z0-9]/g, '-') 
      .replace(/-+/g, '-') 
      .replace(/^-|-$/g, ''); 
    return slugged;
  };
  
  export default Slug;
  