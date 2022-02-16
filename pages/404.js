import { Layout } from '../layouts';
import { BackButton } from '../components';

export default function NotFound() {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <h2 className="mr-4 text-2xl font-bold text-center">
                    404 page not found
                </h2>
                <BackButton />
            </div>
        </Layout>
    );
}
