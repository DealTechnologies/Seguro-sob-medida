<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_type')->unsigned();
            $table->foreign('user_type')->references('id')->on('tipo_usuarios')->onDelete('cascade')->default(3);
            $table->string('name')->nullable();  
            $table->string('lastname')->nullable(); 
            $table->enum('tipoPessoa', array('F','J'))->default('F');
            $table->string('endereco')->nullable();
            $table->string('numero',10)->nullable(); 
            $table->string('estado',2)->nullable();    
            $table->string('cidade')->nullable(); 
            $table->string('complemento')->nullable(); 
            $table->string('cpfCnpj',20)->nullable()->unique();  
            $table->string('telefone',20)->nullable();
            $table->string('celular',20)->nullable(); 
            $table->string('cep',20)->nullable(); 
            $table->string('nomeFantasia')->nullable(); 
            $table->string('nomeEmpresa')->nullable();                     
            $table->string('username')->nullable();
            $table->string('password')->nullable(); 
            $table->string('email')->nullable()->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('token')->nullable();
            $table->string('passwordType')->nullable();           
            $table->rememberToken();
            $table->timestamps();
        });

        DB::table('users')->insert([
            'name' =>'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123456'),
            'user_type' =>'1',
        ]);

        
        DB::table('users')->insert([
            'name' =>'alexandre',
            'lastname' => 'terebinto',
            'email' => 'alexandre.silva@deal.com.br',
            'endereco' => 'Rua Tamoios',
            'numero' => '380',
            'estado' => 'PR',
            'cidade' => 'Curitiba',
            'cpfCnpj' => '00599571900',
            'celular' => '41 99902 0605',
            'cep' => '80320290',
            'password' => bcrypt('123456'),
            'user_type' =>'3',
        ]);

        DB::table('users')->insert([
            'name' =>'Porto Seguro',
            'lastname' => 'Automóveis',
            'email' => 'seguro@deal.com.br',
            'endereco' => 'Rua Tamoios',
            'numero' => '380',
            'estado' => 'PR',
            'cidade' => 'Curitiba',
            'cpfCnpj' => '00000000000000101',
            'celular' => '41 99902 0605',
            'cep' => '80320290',
            'password' => bcrypt('123456'),
            'user_type' =>'2',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
