const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN ||
null;

// Fetch all properties
async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet
    // This piece of code id for deployment.
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/api/properties`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// fetch single property
async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not available yet
    // This piece of code id for deployment.
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/api/properties/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };