'use client';
import { useState } from 'react';

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";







export default function PaymentCreate() {
  const [valorCobranca, setValorCobranca] = useState("");
  const [valor, setValor] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [tipopagamento, settipopagamento] = useState("");
  const [campo2, setCampo2] = useState("");
  const [campo3, setCampo3] = useState("");
  const [campo4, setCampo4] = useState("");
  const [selecttipoPayment, setselecttipoPayment] = useState("");
  const [selecttipocob, setselecttipocob] = useState("");




  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log({ selecttipocob,selecttipoPayment,valorCobranca, valor, vencimento,  campo2, campo3, campo4 });
  }

  return (
    <SidebarProvider>
      <AppSidebar />
  <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
          {/* Topo com linha laranja */}
  <div className="h-1 bg-blue-600 rounded-t" />

          {/* Título centralizado */}
          <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Nova cobrança
          </h1>

          {/* Form grande com 2 colunas que viram 1 em mobile */}
          <Card className="mb-8 rounded-lg shadow-lg">
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
                {/* Coluna 1 */}
                <div className="flex-1 space-y-6">
                  <div>
                    <Label htmlFor="valor-cobranca" className='mb-2'>Valor da cobrança</Label>
                    <div className="flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm">
                      <span className="mr-2 text-muted-foreground">R$</span>
                      <input
                        type="text"
                        id="valor-cobranca"
                        placeholder="0,00"
                        className="w-full bg-transparent outline-none"
                        value={valorCobranca}
                        onChange={(e) => setValorCobranca(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="descricao" className='mb-2'>
                      Descrição da cobrança (Opcional)
                    </Label>
                    <textarea
                      id="descricao"
                      rows={5}
                      placeholder="A descrição informada será impressa na fatura"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Coluna 2 */}
                <div className="flex-1 space-y-6">
                  <div>
                    <Label htmlFor="campo3 " className='mb-2' >Vencimento da cobrança</Label>
                  <Input
                    id="vencimento"
                    type="date"
                    value={vencimento}
                    onChange={(e) => setVencimento(e.target.value)}
                    className="px-3 py-2"
                  />
                  </div>

                  <div>
                    <Label htmlFor="campo4" className='mb-2'>Tipo Cobrança</Label>
                    <Select onValueChange={setselecttipocob} value={selecttipocob}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Escolha uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Opções</SelectLabel>
                              <SelectItem value="opcao1">Assinatura</SelectItem>
                              <SelectItem value="opcao2">Parcelamento</SelectItem>
                              <SelectItem value="opcao3">Avulsa</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                  </div>

                  <div>
                    <Label htmlFor="campo4" className='mb-2'>Forma Pagamento</Label>
                    <Select onValueChange={setselecttipoPayment} value={selecttipoPayment}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Escolha uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Opções</SelectLabel>
                              <SelectItem value="boleto">Boleto Bancário / Pix</SelectItem>
                              <SelectItem value="pix">Cartão de Crédito</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                  </div>



                </div>
              </form>

              <Button
                type="submit"
                className="mt-8 w-full md:w-auto px-8"
                onClick={handleSubmit}
              >
                Criar Pagamento
              </Button>
            </CardContent>
          </Card>
        </div>

    </SidebarProvider>
  );
}
