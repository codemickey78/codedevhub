import config from '../config';
import { GraphQLClient, gql } from 'graphql-request';

const apiEndpoint = `${config.GraphCMSEndpoint}/master`;
const gpcmClient = new GraphQLClient(apiEndpoint);

const QUERY = gql`
            {
                allPosts {
                id,
                title,
                slug,
                brief,
                content{
                html
                },
                coverPhoto{
                    url
                },
                date_published,
                authors{
                name,
                avatar{
                    url
                }
                }
            }
            }
            `

const getPost = async () => {
    const { allPosts } = await gpcmClient.request(QUERY);
    return allPosts;
};

export default getPost;