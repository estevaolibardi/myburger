import { CompleteOrderForm } from './components/CompleteOrderForm';
import { SelectedBurgers } from './components/SelectedBurgers';
import { CompleteOrderContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

enum PaymentMethod {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'informe o Cep'),
  street: zod.string().min(1, 'informe a Rua'),
  number: zod.string().min(1, 'informe o Numero'),
  complement: zod.string(),
  district: zod.string().min(1, 'informe o Bairro'),
  city: zod.string().min(1, 'informe a Cidade'),
  uf: zod.string().min(1, 'informe o UF'),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);

    navigate('/orderConfirmed', { state: data });
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedBurgers />
      </CompleteOrderContainer>
    </FormProvider>
  );
}
