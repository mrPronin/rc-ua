import React, { useState, useEffect } from 'react';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_BLOOD_CENTERS } from 'API/bloodDonationCenters';
import { IBloodDonationCenterConnection, IPageInfo, IBloodDonationCenterEdge, IBloodDonationCenter } from 'interfaces/bloodDonationCenters';
// import Pagination from '@mui/material/Pagination';
import FlexBox from 'components/StyledComponents/FlexBox';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationContainer from 'components/StyledComponents/PaginationContainer';

const BloodCenters: React.FC = () => {
  const client = useApolloClient();
  const { loading, error, data, fetchMore } = useQuery(GET_BLOOD_CENTERS, { variables: { first: 5 } });
  const [pageInfo, setPageInfo] = useState<IPageInfo>();
  const [bloodCenters, setBloodCenters] = useState<IBloodDonationCenter[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data) {
      initData(data);
    }
  }, [data]);

const initData = (data:IBloodDonationCenterConnection)  => {
  setPageInfo({ ...data?.bloodDonationCenters?.pageInfo });
  const newEdges = data?.bloodDonationCenters?.edges;
  const newBloodDonationCenters = newEdges?.map((obj: IBloodDonationCenterEdge) => {
      const { node } = obj;
      return { ...node };
  });
  setBloodCenters(newBloodDonationCenters);
}
  // console.log(bloodCenters, 'edges-bloodCenters')

  const loadNext = async () => {
    if (!pageInfo?.hasNextPage) return;
  
    const after = pageInfo?.endCursor;
    const first = 5;
  
    try {
      const { data } = await fetchMore({
        variables: { first, after },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return fetchMoreResult
        },
      });
      initData(data);
      setCurrentPage(currentPage + 1)
    } catch (error) {
      console.error('Error while fetching more data:', error);
    }
  };

  const loadPrevious = async () => {
    if (!pageInfo?.hasPreviousPage) return;

    const before = pageInfo?.startCursor;
    const last = 5;
    try {
        const { data } = await fetchMore({
            variables: { first: undefined, last, before },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return fetchMoreResult;
            },
        });
      initData(data);
      setCurrentPage(currentPage -1)
    } catch (error) {
        console.error('Error while fetching more data:', error);
    }
};

  // const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
  //   console.log(event, page, "pagination-change")
  //   if (page > currentPage) {
  //     loadNext();
  //   } else if (page < currentPage) {
  //     loadPrevious();
  //   }
  //   setCurrentPage(page);
  // };

  if (loading) return (<FlexBox margin="25px 0">
    <CircularProgress />
  </FlexBox>);

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>Центри переливання крові</h1>
      <ul>
        {bloodCenters.map((center: IBloodDonationCenter, index: number) => (
            < li key={center.id} >
              <strong>{index + 1}.{center.name}</strong>
            </li>
        ))
        }
      </ul >
      <FlexBox justify="center" margin="25px 0 0 0">
      <PaginationContainer>
      <IconButton onClick={loadPrevious} disabled={currentPage === 1} style={{padding: '6px 12px'}}>
        <ArrowBackIcon />Prev
      </IconButton>
      <IconButton onClick={loadNext} disabled={currentPage === 4}>
        Next<ArrowForwardIcon />
      </IconButton>
    </PaginationContainer>
        {/* <Pagination count={4} color="primary" page={currentPage} onChange={(e, page) => handlePageChange(e, page)} /> */}
      </FlexBox>
    </>
  );
};

export default BloodCenters;