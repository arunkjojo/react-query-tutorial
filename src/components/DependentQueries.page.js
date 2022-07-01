import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(
    ["user", email], 
    () => fetchUserByEmail(email)
  );
  const channelId = user?.data?.channelId;
  const queryResults = useQuery(["courses", channelId], () =>      
    fetchCoursesByChannelId(channelId), {
      enabled: !!channelId,
    }
  );
  console.log(user?.data, queryResults?.data?.data?.courses)
  return <>
    <h2>Dependent Queries</h2>
    <div>
      <h5>User Data</h5>
      <p>{user?.data?.id} - {user?.data?.channelId}</p>
    </div>
    <div>
      <h5>Course in {user?.data?.channelId}</h5>
      {queryResults?.data?.data?.courses.map(result => (
            <li>{result}</li>
        ))}
    </div>
  </>;
};
