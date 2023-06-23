import { AuthLayout } from './AuthLayout';

export default {
  title: 'Auth Layout',
  component: AuthLayout,
};

export const DefaultLayout = <AuthLayout />;

export const AuthLayoutWithContent = () => (
  <AuthLayout>
    <div
      style={{
        height: 150,
        width: 150,
        background: 'red',
        borderRadius: 8,
      }}
    >
      Content
    </div>
  </AuthLayout>
);
