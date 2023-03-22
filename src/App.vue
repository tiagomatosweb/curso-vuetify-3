<template>
  <v-app theme="test">
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

        <v-list-group value="Clientes">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
            >Clientes</v-list-item>
          </template>

          <v-list-item prepend-icon="mdi-currency-usd">Vendas</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"></v-app-bar-nav-icon>
      <v-app-bar-title>Meu app</v-app-bar-title>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img
                cover
                src="https://thumbs.dreamstime.com/z/nerd-portrait-young-cheerful-businessman-smiling-36201399.jpg"></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Meu perfil</v-list-item-title>
              </v-list-item>

              <v-list-item prepend-icon="mdi-heart-outline">
                <v-list-item-title>Favoritos</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-btn>Teste theme</v-btn>
        <h1 class="mb-6 text-brand">Dashboard</h1>

        <v-card flat class="border mb-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Últimos usuários</v-card-title>

            <v-card-title>
              <v-btn @click="isDialogOpen = true" variant="tonal" size="small" :ripple="false">Adicionar usuário</v-btn>

              <v-dialog
                v-model="isDialogOpen"
                width="600px"
              >
                <v-card>
                  <v-card-title>Adicionar usuário</v-card-title>

                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-text-field label="Nome"></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          label="Email"
                          :rules="emailRules"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-select
                      label="Cargo"
                      :items="['Admin', 'Gerente', 'Convidado']"
                    >
                    </v-select>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="isDialogOpen = false">Cancelar</v-btn>
                    <v-btn variant="tonal" color="success">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
          </div>

          <v-table>
            <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Cargo</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Fulano</td>
              <td>fulano@gmail.com</td>
              <td>
                <v-chip color="primary" variant="outlined" size="small">Admin</v-chip>
              </td>
              <td>
                <v-dialog width="600px">
                  <template #activator="{ props }">
                    <v-btn v-bind="props" variant="tonal" color="primary">Editar</v-btn>
                  </template>

                  <v-card>
                    <v-card-text>
                      Editar
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </td>
            </tr>
            <tr>
              <td>Cicrano</td>
              <td>cicrano@gmail.com</td>
              <td>
                <v-chip color="success" variant="outlined" size="small">Gerente</v-chip>
              </td>
              <td>
                <v-btn variant="tonal" color="primary">Editar</v-btn>
              </td>
            </tr>
            <tr>
              <td>Beltrano</td>
              <td>beltrano@gmail.com</td>
              <td>
                <v-chip variant="outlined" size="small">Convidado</v-chip>
              </td>
              <td>
                <v-btn variant="tonal" color="primary">Editar</v-btn>
              </td>
            </tr>
            </tbody>
          </v-table>
        </v-card>

        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title>Top 10 Praias na Bahia</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet</div>
              </v-card-text>

              <v-card-actions>
                <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title>Top 10 Praias na Bahia</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet</div>
              </v-card-text>

              <v-card-actions>
                <v-card-actions>
                  <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                  <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
                </v-card-actions>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title>Top 10 Praias na Bahia</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet</div>
              </v-card-text>

              <v-card-actions>
                <v-card-actions>
                  <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                  <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
                </v-card-actions>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card flat class="border">
              <v-img
                class="align-end text-white"
                src="https://images.pexels.com/photos/13435510/pexels-photo-13435510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              >
                <v-card-title>Top 10 Praias na Bahia</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

              <v-card-text>
                <div>Rio vermelho</div>

                <div>Lorem ipsum dolor sit amet</div>
              </v-card-text>

              <v-card-actions>
                <v-card-actions>
                  <v-btn variant="outlined" color="primary">Ver mais</v-btn>
                  <v-btn prepend-icon="mdi-cart" variant="tonal" color="blue">Comprar</v-btn>
                </v-card-actions>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false)
const isDialogOpen = ref(false)
const emailRules = [
  value => {
    if (value) {
      return true
    }

    return 'O email é obrigatório';
  },
  value => {
    if (value.includes('@')) {
      return true;
    }

    return 'Email inválido'
  }
];
</script>









