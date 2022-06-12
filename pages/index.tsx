import Layout from '../components/Layout';
import Counter from "../components/Counter";
import Card from "../components/card/Card";
import CardTitle from "../components/card/CardTitle";
import CardContent from "../components/card/CardContent";

const IndexPage = () => (
  <Layout>
    <div>This is the main page</div>
    <Card>
      <CardTitle>Counter</CardTitle>
      <CardContent>
        <Counter></Counter>
      </CardContent>
    </Card>
  </Layout>
)

export default IndexPage
