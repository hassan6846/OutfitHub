const Slug = (originalString) => {
    const slugged = originalString
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z0-9]/g, '-') // replace non-alphanumeric characters with a hyphen
      .replace(/-+/g, '-') // replace multiple consecutive hyphens with a single hyphen
      .replace(/^-|-$/g, ''); // remove leading and trailing hyphens
    return slugged;
  };
  
  export default Slug;
  